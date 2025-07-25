// PWA utility functions for installation and offline handling

// PWA Installation
interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let deferredPrompt: BeforeInstallPromptEvent | null = null;

export const initializePWA = (): void => {
  if (typeof window === 'undefined') return;

  // Listen for the beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e: Event) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e as BeforeInstallPromptEvent;
    // Update UI to notify the user they can install the PWA
    showInstallPromotion();
  });

  // Listen for the appinstalled event
  window.addEventListener('appinstalled', () => {
    // PWA was installed
    hideInstallPromotion();
    // Track installation analytics
    trackPWAInstall();
  });

  // Check if app is already installed
  if (window.matchMedia('(display-mode: standalone)').matches) {
    // PWA is running in standalone mode
  }
};

export const installPWA = async (): Promise<boolean> => {
  if (!deferredPrompt) {
    return false;
  }

  try {
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    trackPWAInstallAttempt(outcome);
    return outcome === 'accepted';
  } catch (error) {
    // Error during PWA installation
    return false;
  } finally {
    deferredPrompt = null;
  }
};

export const isPWAInstallable = (): boolean => Boolean(deferredPrompt);

export const isPWAInstalled = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in window.navigator && (window.navigator as any).standalone === true)
  );
};

// Offline Detection
export const isOnline = (): boolean => {
  if (typeof navigator === 'undefined') return true;
  return navigator.onLine;
};

export const initializeOfflineDetection = (): void => {
  if (typeof window === 'undefined') return;

  const updateOnlineStatus = () => {
    const status = navigator.onLine ? 'online' : 'offline';
    document.body.dataset.connection = status;
    
    if (!navigator.onLine) {
      showOfflineNotification();
    } else {
      hideOfflineNotification();
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
};

// Cache Management
export const clearPWACache = async (): Promise<void> => {
  if (!('caches' in window)) return;
  
  const cacheNames = await caches.keys();
  await Promise.all(cacheNames.map(name => caches.delete(name)));
};

export const updatePWACache = async (): Promise<void> => {
  if (!('serviceWorker' in navigator)) return;
  
  const registration = await navigator.serviceWorker.ready;
  registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
};

// UI Helper Functions
const showInstallPromotion = (): void => {
  const installButton = document.getElementById('pwa-install-button');
  if (installButton) {
    installButton.style.display = 'block';
  }
  window.dispatchEvent(new CustomEvent('pwa-installable'));
};

const hideInstallPromotion = (): void => {
  const installButton = document.getElementById('pwa-install-button');
  if (installButton) {
    installButton.style.display = 'none';
  }
  window.dispatchEvent(new CustomEvent('pwa-installed'));
};

const showOfflineNotification = (): void => {
  const offlineIndicator = document.getElementById('offline-indicator');
  if (offlineIndicator) {
    offlineIndicator.style.display = 'block';
  }
  window.dispatchEvent(new CustomEvent('app-offline'));
};

const hideOfflineNotification = (): void => {
  const offlineIndicator = document.getElementById('offline-indicator');
  if (offlineIndicator) {
    offlineIndicator.style.display = 'none';
  }
  window.dispatchEvent(new CustomEvent('app-online'));
};

interface GTagWindow extends Window {
  gtag: (command: string, action: string, params: object) => void;
}

// Analytics Functions
const trackPWAInstall = (): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as GTagWindow).gtag('event', 'pwa_install', {
      event_category: 'PWA',
      event_label: 'Installation Completed'
    });
  }
};

const trackPWAInstallAttempt = (outcome: 'accepted' | 'dismissed'): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as GTagWindow).gtag('event', 'pwa_install_prompt', {
      event_category: 'PWA',
      event_label: `Installation ${outcome}`
    });
  }
};

// Background Sync
export const registerBackgroundSync = async (tag: string): Promise<void> => {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    if ('sync' in registration) {
      await (registration as any).sync.register(tag);
      // Background sync registered successfully
    }
  } catch (error) {
    // Background sync not supported
  }
};

// Push Notifications
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) return 'denied';
  return Notification.requestPermission();
};

export const subscribeToPushNotifications = async (): Promise<PushSubscription | null> => {
  if (!('serviceWorker' in navigator && 'PushManager' in window)) return null;

  const registration = await navigator.serviceWorker.ready;
  return registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
  });
};

// Performance Monitoring
export const measurePWAPerformance = (): void => {
  if (!('performance' in window)) return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(_entry => {
      // Performance metric collected
    });
  });
  
  observer.observe({ 
    entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] 
  });
};

// Export all utilities
const PWAUtils = {
  initializePWA,
  installPWA,
  isPWAInstallable,
  isPWAInstalled,
  isOnline,
  initializeOfflineDetection,
  clearPWACache,
  updatePWACache,
  registerBackgroundSync,
  requestNotificationPermission,
  subscribeToPushNotifications,
  measurePWAPerformance
};

export default PWAUtils;
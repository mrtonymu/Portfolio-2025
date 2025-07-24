// PWA utility functions for installation and offline handling

// PWA Installation
let deferredPrompt: any = null;

export const initializePWA = (): void => {
  if (typeof window === 'undefined') return;

  // Listen for the beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    // Update UI to notify the user they can install the PWA
    showInstallPromotion();
  });

  // Listen for the appinstalled event
  window.addEventListener('appinstalled', () => {
    console.log('PWA was installed');
    hideInstallPromotion();
    // Track installation analytics
    trackPWAInstall();
  });

  // Check if app is already installed
  if (window.matchMedia('(display-mode: standalone)').matches) {
    console.log('PWA is running in standalone mode');
  }
};

export const installPWA = async (): Promise<boolean> => {
  if (!deferredPrompt) {
    console.log('PWA install prompt not available');
    return false;
  }

  try {
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
      trackPWAInstallAttempt('accepted');
      return true;
    } else {
      console.log('User dismissed the install prompt');
      trackPWAInstallAttempt('dismissed');
      return false;
    }
  } catch (error) {
    console.error('Error during PWA installation:', error);
    return false;
  } finally {
    // Clear the deferredPrompt
    deferredPrompt = null;
  }
};

export const isPWAInstallable = (): boolean => {
  return deferredPrompt !== null;
};

export const isPWAInstalled = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true
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
    document.body.setAttribute('data-connection', status);
    
    if (status === 'offline') {
      showOfflineNotification();
    } else {
      hideOfflineNotification();
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  
  // Set initial status
  updateOnlineStatus();
};

// Cache Management
export const clearPWACache = async (): Promise<void> => {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(
      cacheNames.map(cacheName => caches.delete(cacheName))
    );
    console.log('PWA cache cleared');
  }
};

export const updatePWACache = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    const registration = await navigator.serviceWorker.ready;
    if (registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  }
};

// UI Helper Functions
const showInstallPromotion = (): void => {
  // Show install button or banner
  const installButton = document.getElementById('pwa-install-button');
  if (installButton) {
    installButton.style.display = 'block';
  }
  
  // Dispatch custom event for React components
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
  // Show offline indicator
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

// Analytics Functions
const trackPWAInstall = (): void => {
  // Track PWA installation
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'pwa_install', {
      event_category: 'PWA',
      event_label: 'Installation Completed'
    });
  }
};

const trackPWAInstallAttempt = (outcome: 'accepted' | 'dismissed'): void => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'pwa_install_prompt', {
      event_category: 'PWA',
      event_label: `Installation ${outcome}`
    });
  }
};

// Background Sync
export const registerBackgroundSync = async (tag: string): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      if ('sync' in registration) {
        await (registration as any).sync.register(tag);
        console.log(`Background sync registered: ${tag}`);
      }
    } catch (error) {
      console.log('Background sync not supported:', error);
    }
  }
};

// Push Notifications (future enhancement)
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if ('Notification' in window) {
    return await Notification.requestPermission();
  }
  return 'denied';
};

export const subscribeToPushNotifications = async (): Promise<PushSubscription | null> => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    });
    return subscription;
  }
  return null;
};

// Performance Monitoring
export const measurePWAPerformance = (): void => {
  if ('performance' in window) {
    // Measure key performance metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log(`${entry.name}: ${entry.startTime}`);
      }
    });
    
    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
  }
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
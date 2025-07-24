import React, { useState, useEffect } from 'react';
import {
  Button,
  useToast,
  Icon,
  Tooltip,
  Box,
  Text,
  VStack
} from '@chakra-ui/react';
import { FiDownload, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { installPWA, isPWAInstallable, isPWAInstalled } from '../utils/pwa';

const MotionButton = motion(Button);

interface PWAInstallButtonProps {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  position?: 'fixed' | 'relative';
}

const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'solid',
  size = 'md',
  showText = true,
  position = 'relative'
}) => {
  const [isInstallable, setIsInstallable] = useState<boolean>(false);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);
  const [isInstalling, setIsInstalling] = useState<boolean>(false);
  const toast = useToast();

  useEffect(() => {
    // Check initial state
    setIsInstallable(isPWAInstallable());
    setIsInstalled(isPWAInstalled());

    // Listen for PWA events
    const handleInstallable = () => setIsInstallable(true);
    const handleInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
    };

    window.addEventListener('pwa-installable', handleInstallable);
    window.addEventListener('pwa-installed', handleInstalled);

    return () => {
      window.removeEventListener('pwa-installable', handleInstallable);
      window.removeEventListener('pwa-installed', handleInstalled);
    };
  }, []);

  const handleInstall = async (): Promise<void> => {
    setIsInstalling(true);
    
    try {
      const success = await installPWA();
      
      if (success) {
        toast({
          title: 'App Installed!',
          description: 'The portfolio app has been installed successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: 'Installation Cancelled',
          description: 'App installation was cancelled.',
          status: 'info',
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Installation Failed',
        description: 'There was an error installing the app.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsInstalling(false);
    }
  };

  // Don't render if not installable or already installed
  if (!isInstallable || isInstalled) {
    return null;
  }

  const buttonContent = (
    <MotionButton
      id="pwa-install-button"
      variant={variant}
      size={size}
      colorScheme="teal"
      onClick={handleInstall}
      isLoading={isInstalling}
      loadingText="Installing..."
      leftIcon={<Icon as={FiDownload} />}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      boxShadow="lg"
      _hover={{
        boxShadow: 'xl',
        transform: 'translateY(-2px)'
      }}
    >
      {showText && (
        <VStack spacing={0} align="start">
          <Text fontSize="sm" fontWeight="bold">
            Install App
          </Text>
          <Text fontSize="xs" opacity={0.8}>
            Quick access
          </Text>
        </VStack>
      )}
      {!showText && <Icon as={FiSmartphone} />}
    </MotionButton>
  );

  if (position === 'fixed') {
    return (
      <Box
        position="fixed"
        bottom={4}
        right={4}
        zIndex={1000}
        display={{ base: 'block', md: 'none' }} // Only show on mobile
      >
        <Tooltip
          label="Install this app for quick access"
          placement="left"
          hasArrow
        >
          {buttonContent}
        </Tooltip>
      </Box>
    );
  }

  return (
    <Tooltip
      label="Install this portfolio as an app on your device"
      placement="top"
      hasArrow
    >
      {buttonContent}
    </Tooltip>
  );
};

export default PWAInstallButton;
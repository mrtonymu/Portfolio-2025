import React, { useState, useEffect } from 'react';
import {
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useColorModeValue,
  Slide,
  Icon,
  HStack,
  Text
} from '@chakra-ui/react';
import { FiWifiOff, FiWifi } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { isOnline } from '../utils/pwa';

const MotionBox = motion(Box);

interface OfflineIndicatorProps {
  position?: 'top' | 'bottom';
  persistent?: boolean;
}

const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({
  position = 'top',
  persistent = false
}) => {
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasBeenOffline, setHasBeenOffline] = useState<boolean>(false);

  const bgColor = useColorModeValue('red.50', 'red.900');
  const borderColor = useColorModeValue('red.200', 'red.700');
  const successBgColor = useColorModeValue('green.50', 'green.900');
  const successBorderColor = useColorModeValue('green.200', 'green.700');

  useEffect(() => {
    // Check initial online status
    const updateStatus = () => {
      const online = isOnline();
      setIsOffline(!online);
      
      if (!online) {
        setHasBeenOffline(true);
        setIsVisible(true);
      } else if (hasBeenOffline) {
        // Show "back online" message briefly
        setIsVisible(true);
        setTimeout(() => {
          if (!persistent) {
            setIsVisible(false);
          }
        }, 3000);
      }
    };

    // Listen for online/offline events
    const handleOnline = () => updateStatus();
    const handleOffline = () => updateStatus();
    const handleAppOnline = () => updateStatus();
    const handleAppOffline = () => updateStatus();

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    window.addEventListener('app-online', handleAppOnline);
    window.addEventListener('app-offline', handleAppOffline);

    // Initial check
    updateStatus();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('app-online', handleAppOnline);
      window.removeEventListener('app-offline', handleAppOffline);
    };
  }, [hasBeenOffline, persistent]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Slide
          direction={position === 'top' ? 'top' : 'bottom'}
          in={isVisible}
          style={{ zIndex: 1000 }}
        >
        <MotionBox
          id="offline-indicator"
          position="fixed"
          top={position === 'top' ? 0 : 'auto'}
          bottom={position === 'bottom' ? 0 : 'auto'}
          left={0}
          right={0}
          zIndex={1000}
          initial={{ opacity: 0, y: position === 'top' ? -50 : 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: position === 'top' ? -50 : 50 }}
          transition={{ duration: 0.3 }}
        >
          <Alert
            status={isOffline ? 'error' : 'success'}
            variant="subtle"
            bg={isOffline ? bgColor : successBgColor}
            borderBottom={`2px solid`}
            borderColor={isOffline ? borderColor : successBorderColor}
            borderRadius={0}
          >
            <AlertIcon as={isOffline ? FiWifiOff : FiWifi} />
            
            <Box flex="1">
              <AlertTitle fontSize="sm" fontWeight="bold">
                {isOffline ? 'You\'re offline' : 'Back online!'}
              </AlertTitle>
              <AlertDescription fontSize="xs">
                {isOffline
                  ? 'Some features may be limited. Check your internet connection.'
                  : 'Your connection has been restored. All features are available.'
                }
              </AlertDescription>
            </Box>

            {!persistent && (
              <CloseButton
                alignSelf="flex-start"
                position="relative"
                right={-1}
                top={-1}
                onClick={handleClose}
                size="sm"
              />
            )}
          </Alert>
        </MotionBox>
        </Slide>
      )}
    </AnimatePresence>
  );
};

// Compact version for mobile
export const CompactOfflineIndicator: React.FC = () => {
  const [isOffline, setIsOffline] = useState<boolean>(false);
  const iconColor = useColorModeValue('red.500', 'red.300');
  const bgColor = useColorModeValue('red.50', 'red.900');
  const borderColor = useColorModeValue('red.200', 'red.700');

  useEffect(() => {
    const updateStatus = () => {
      setIsOffline(!isOnline());
    };

    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
    window.addEventListener('app-online', updateStatus);
    window.addEventListener('app-offline', updateStatus);

    updateStatus();

    return () => {
      window.removeEventListener('online', updateStatus);
      window.removeEventListener('offline', updateStatus);
      window.removeEventListener('app-online', updateStatus);
      window.removeEventListener('app-offline', updateStatus);
    };
  }, []);

  if (!isOffline) {
    return null;
  }

  return (
    <MotionBox
      position="fixed"
      top={4}
      right={4}
      zIndex={999}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <HStack
        bg={bgColor}
        color={iconColor}
        px={3}
        py={2}
        borderRadius="full"
        border="1px solid"
        borderColor={borderColor}
        boxShadow="lg"
      >
        <Icon as={FiWifiOff} boxSize={4} />
        <Text fontSize="xs" fontWeight="medium">
          Offline
        </Text>
      </HStack>
    </MotionBox>
  );
};

export default OfflineIndicator;
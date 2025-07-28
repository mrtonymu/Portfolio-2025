import React, { useEffect, useState, memo } from 'react';
import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = memo(
  ({ showMetrics = false, position = 'bottom-right' }) => {
    const [metrics, setMetrics] = useState<PerformanceMetrics>({
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
    });

    const bg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    const textColor = useColorModeValue('gray.600', 'gray.300');

    useEffect(() => {
      // 只在开发环境或明确启用时显示
      if (!showMetrics && process.env.NODE_ENV === 'production') return;

      const observer = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'paint':
              if (entry.name === 'first-contentful-paint') {
                setMetrics(prev => ({
                  ...prev,
                  fcp: Math.round(entry.startTime),
                }));
              }
              break;
            case 'largest-contentful-paint':
              setMetrics(prev => ({
                ...prev,
                lcp: Math.round(entry.startTime),
              }));
              break;
            case 'first-input':
              setMetrics(prev => ({
                ...prev,
                fid: Math.round(
                  (entry as any).processingStart - entry.startTime
                ),
              }));
              break;
            case 'layout-shift':
              if (!(entry as any).hadRecentInput) {
                setMetrics(prev => ({
                  ...prev,
                  cls:
                    Math.round((prev.cls || 0) + (entry as any).value * 1000) /
                    1000,
                }));
              }
              break;
          }
        }
      });

      // 观察性能指标
      try {
        observer.observe({
          entryTypes: [
            'paint',
            'largest-contentful-paint',
            'first-input',
            'layout-shift',
          ],
        });
      } catch (e) {
        // Performance Observer not supported
      }

      // 获取 TTFB
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          ttfb: Math.round(navigation.responseStart - navigation.requestStart),
        }));
      }

      return () => observer.disconnect();
    }, [showMetrics]);

    // 获取性能评分颜色
    const getScoreColor = (metric: string, value: number | null) => {
      if (value === null) return 'gray';

      switch (metric) {
        case 'fcp':
          return value <= 1800 ? 'green' : value <= 3000 ? 'yellow' : 'red';
        case 'lcp':
          return value <= 2500 ? 'green' : value <= 4000 ? 'yellow' : 'red';
        case 'fid':
          return value <= 100 ? 'green' : value <= 300 ? 'yellow' : 'red';
        case 'cls':
          return value <= 0.1 ? 'green' : value <= 0.25 ? 'yellow' : 'red';
        case 'ttfb':
          return value <= 800 ? 'green' : value <= 1800 ? 'yellow' : 'red';
        default:
          return 'gray';
      }
    };

    // 格式化数值显示
    const formatValue = (metric: string, value: number | null) => {
      if (value === null) return 'N/A';

      switch (metric) {
        case 'cls':
          return value.toFixed(3);
        default:
          return `${value}ms`;
      }
    };

    if (!showMetrics && process.env.NODE_ENV === 'production') return null;

    const positionStyles = {
      'top-left': { top: 4, left: 4 },
      'top-right': { top: 4, right: 4 },
      'bottom-left': { bottom: 4, left: 4 },
      'bottom-right': { bottom: 4, right: 4 },
    };

    return (
      <Box
        position='fixed'
        {...positionStyles[position]}
        bg={bg}
        border='1px solid'
        borderColor={borderColor}
        borderRadius='md'
        p={3}
        fontSize='xs'
        zIndex={9999}
        maxW='200px'
        boxShadow='lg'
      >
        <Text fontWeight='bold' mb={2} color={textColor}>
          性能指标
        </Text>
        <VStack spacing={1} align='stretch'>
          {[
            { key: 'fcp', label: 'FCP', value: metrics.fcp },
            { key: 'lcp', label: 'LCP', value: metrics.lcp },
            { key: 'fid', label: 'FID', value: metrics.fid },
            { key: 'cls', label: 'CLS', value: metrics.cls },
            { key: 'ttfb', label: 'TTFB', value: metrics.ttfb },
          ].map(({ key, label, value }) => (
            <HStack key={key} justify='space-between'>
              <Text color={textColor}>{label}:</Text>
              <Badge
                colorScheme={getScoreColor(key, value)}
                variant='subtle'
                fontSize='xs'
              >
                {formatValue(key, value)}
              </Badge>
            </HStack>
          ))}
        </VStack>
      </Box>
    );
  }
);

export default PerformanceMonitor;

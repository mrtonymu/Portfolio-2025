import React, { memo, useMemo } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const FloatingParticles = memo(({ count = 20 }) => {
  // 响应式粒子数量：进一步减少以提升性能
  const responsiveCount = useBreakpointValue({
    base: 1, // 移动端只保留1个
    sm: 2, // 小屏幕
    md: 3, // 中等屏幕
    lg: Math.min(count, 6), // 大屏幕进一步限制数量
  });

  // 使用useMemo缓存粒子数据，避免重复计算
  const particles = useMemo(
    () =>
      Array.from({ length: responsiveCount }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1.5, // 减小粒子大小
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 20, // 进一步增加动画时长，减少CPU使用
        delay: Math.random() * 3,
      })),
    [responsiveCount]
  );

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      width='100vw'
      height='100vh'
      pointerEvents='none'
      zIndex={-1}
      overflow='hidden'
    >
      {particles.map(particle => (
        <MotionBox
          key={particle.id}
          position='absolute'
          left={`${particle.x}%`}
          top={`${particle.y}%`}
          width={`${particle.size}px`}
          height={`${particle.size}px`}
          borderRadius='full'
          bg='linear-gradient(45deg, rgba(56, 178, 172, 0.3), rgba(66, 153, 225, 0.3))'
          boxShadow='0 0 20px rgba(56, 178, 172, 0.5)'
          animate={{
            y: [-15, 15, -15], // 减少移动幅度
            x: [-8, 8, -8],
            scale: [1, 1.05, 1], // 进一步减少缩放幅度
            opacity: [0.1, 0.4, 0.1], // 降低透明度，减少视觉干扰
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear', // 使用线性缓动减少计算
            type: 'tween',
            // 优化性能设置
            repeatType: 'reverse',
          }}
          // 添加will-change属性优化GPU加速
          style={{ willChange: 'transform, opacity' }}
        />
      ))}
    </Box>
  );
});

export default FloatingParticles;

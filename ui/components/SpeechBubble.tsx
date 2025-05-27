'use client';

import { motion } from 'framer-motion';

export default function SpeechBubble({ content }: { content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="speech-container"
    >
      <div className="speech-bubble">
        <p>{content}</p>
      </div>
    </motion.div>
  );
}

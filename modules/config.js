/**
 * Application configuration and constants
 */

export const CONFIG = {
  // Authentication
  SECRET_CODE: '007',
  DEFAULT_ROOM: 'Room Josee',
  
  // Default partners for demo
  PARTNERS: ['Alice', 'Bob', 'Charlie'],
  DEFAULT_PARTNER: 'Alice',
  
  // Rooms available
  ROOMS: ['Classroom 1', 'Classroom 2', 'Classroom 3', 'Classroom 4', 'Classroom 5', 'Room Josee'],
  
  // View modes
  VIEW_MODES: {
    CAMERA: 'camera',
    SCREEN: 'screen',
    MIXED: 'mixed'
  },
  
  // Recording
  RECORDING: {
    MIME_TYPE: 'video/webm; codecs=vp9',
    FALLBACK_MIME_TYPE: 'video/webm',
    FILE_PREFIX: 'zoom-demo'
  },
  
  // Media constraints
  MEDIA_CONSTRAINTS: {
    VIDEO: { video: true, audio: false },
    AUDIO: { audio: true, video: false },
    DISPLAY: { video: { cursor: 'always' }, audio: false }
  },
  
  // Storage keys
  STORAGE_KEYS: {
    USER_NAME: 'zoom_user_name'
  }
};

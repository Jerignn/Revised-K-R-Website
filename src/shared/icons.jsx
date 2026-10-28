const paths = {
  phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  snow: <path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9M9 4l3 3 3-3M9 20l3-3 3 3M4 9l3 3-3 3M20 9l-3 3 3 3" />,
  flame: <path d="M12 22c4 0 7-3 7-7 0-5-5-7-5-13-3 2-5 5-5 8-1-1-2-2-2-4-2 2-2 5-2 9 0 4 3 7 7 7z" />,
  wind: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8" />,
  building: <path d="M4 21V5l8-3v19M12 8h8v13M8 7v.01M8 11v.01M8 15v.01M16 12v.01M16 16v.01M2 21h20" />,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2 2 9.3l6.9-1z" />,
  wrench: <path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.7-2.7a4 4 0 0 0-5-5L2 10l8-8 2.3 2.3a4 4 0 0 0 2.4 2z" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  plus: <path d="M12 5v14M5 12h14" />,
  download: <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />,
  upload: <path d="M12 21V9M7 14l5-5 5 5M5 3h14" />,
  fan: <><circle cx="12" cy="12" r="2" /><path d="M12 10c0-4 1-8 4-8s3 4-2 7M14 12c4 0 8 1 8 4s-4 3-7-2M12 14c0 4-1 8-4 8s-3-4 2-7M10 12c-4 0-8-1-8-4s4-3 7 2" /></>,
  drop: <path d="M12 2s7 7.5 7 13a7 7 0 0 1-14 0c0-5.5 7-13 7-13z" />,
  dollar: <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
  tag: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><circle cx="7" cy="7" r="1.5" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  quote: <path d="M10 7H6a2 2 0 0 0-2 2v4h6V7zM20 7h-4a2 2 0 0 0-2 2v4h6V7zM4 13c0 3 1 4 4 5M14 13c0 3 1 4 4 5" />,
  calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  grid: <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
};

export function Icon({ name, className = 'size-5', strokeWidth = 1.8, fill = 'none' }) {
  return (
    <svg className={`shrink-0 ${className}`} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

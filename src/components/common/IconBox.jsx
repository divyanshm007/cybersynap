const variants = {
  purple:   'bg-purple-50 text-purple-600',
  pink:     'bg-pink-50 text-pink-600',
  gradient: 'bg-gradient-to-br from-[#E83E9F] to-[#8B3DFF] text-white shadow-[0_4px_14px_rgba(139,61,255,0.25)]',
  soft:     'bg-purple-50 text-purple-600 border border-purple-100',
};

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-14 h-14',
  xl: 'w-16 h-16',
};

const iconSizes = { sm: 18, md: 22, lg: 26, xl: 30 };

export default function IconBox({ icon: Icon, variant = 'soft', size = 'md', className = '' }) {
  return (
    <div className={`rounded-xl flex items-center justify-center flex-shrink-0 ${variants[variant]} ${sizes[size]} ${className}`}>
      <Icon size={iconSizes[size]} strokeWidth={1.75} />
    </div>
  );
}

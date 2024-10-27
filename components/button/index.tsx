interface buttonInterface {
    label: string;
    action?: () => void;
    variant?: 'dark' | 'transparent' | 'gray';
    className?: string;
}

const Button = ({
    label,
    action,
    variant = 'dark',
    className
}: buttonInterface) => {
    return (
        <button
            className={`
                border-[2px] transition-all duration-75 py-3 px-10 rounded-[5px] text-[20px] font-semibold min-h-[60px]
                ${className ? className : ''}
                ${variant === 'dark' ? 'bg-title_color hover:bg-background_light focus:bg-background_light text-background_light hover:text-title_color focus:text-title_color border-title_color' : ''}
            `}
            onClick={action}
        >
            {label}
        </button>
    )
}
export default Button
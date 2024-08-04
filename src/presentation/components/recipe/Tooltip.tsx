export const Tooltip = ({children, ...props}: {children: React.ReactNode}) => {
	return (
		<span
			className={`bg-green-300 text-emerald-700 text-center -z-10 -top-[3.3rem]
			translate-y-16 opacity-0 invisible group-hover:translate-y-0 text-nowrap
			group-hover:visible group-hover:opacity-100 transition-all duration-500
			block absolute px-2 py-2 text-sm rounded-lg before:content-[""] 
			before:absolute before:w-0 before:h-0 before:border-x-8 before:border-x-transparent	 
			before:border-t-[12px] before:border-t-green-300 before:-bottom-2 before:left-1/2 
			before:-translate-x-1/2
			`} {...props}>
			{children}
		</span>
	);
};

export const InputFieldForm = ({ label, placeholder = '' ,type='text',messages = [], ...props}) => {
    return (
        <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">{label}</span>
            <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                placeholder={placeholder}
                type={type}
                {...props}
            />
            {messages.length > 0 && (
               
                messages.map((message, index) => (
                    <span class="text-xs text-red-600 dark:text-red-400">{message}</span>
                ))
               
            )}
        </label>
    )
}

export const MultiSelectFieldForm = ({ label,options = [],messages = [], ...props}) => {
    return (
        <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">
            {label}
            </span>
            <select
            className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-multiselect focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
            multiple
            {...props}
            >
            {options.length > 0 && (
               
               options.map((option, index) => (
                    <option value={option.id} key={option.id} >{option.name}</option>
               ))
           )}
            </select>
        </label>
    )
}
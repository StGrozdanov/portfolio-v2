import { TextareaHTMLAttributes, useCallback, useEffect, useState } from 'react';
import styles from './TextArea.module.scss';
import { useDebounce } from '../../hooks/useDebounce';

interface TextAreaProps extends TextareaHTMLAttributes<TextAreaProps> {
    label: string,
    requestHandler: (input: string) => void,
}

export default function TextArea({
    defaultValue,
    rows = 4,
    cols = 50,
    name,
    label,
    requestHandler,
}: TextAreaProps) {
    const [input, setInput] = useState(defaultValue);
    const debouncedInput = useDebounce(input, 800);

    const inputChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value);
    }, []);

    useEffect(() => {
        if (debouncedInput !== '' && debouncedInput === input && input !== defaultValue) {
            console.log(debouncedInput);
            requestHandler(debouncedInput as string);
        }
    }, [input, debouncedInput]);

    return (
        <section className={styles['text-area-container']}>
            <label htmlFor={name}>{label}</label>
            <textarea
                name={name}
                rows={rows}
                cols={cols}
                value={input}
                onChange={inputChangeHandler}
            />
        </section>
    );
}
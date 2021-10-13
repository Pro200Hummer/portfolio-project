import React, {FC, useState} from "react";
import style from './CardPreviewer.module.scss'

type PreviewerPops = {
    image: string
    title: string
    text: string
    href: string
}

type LinkProps = {
    href: string
    onMouseHandler: (value: boolean) => void
}

export const CardPreviewer: FC<PreviewerPops> = props => {

    const [isShown, setIsShown] = useState(false);

    const onMouseHandler = (value: boolean) => {
        setIsShown(value)
    }

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img
                    src={props.image}
                    alt="#"
                    className={isShown ? style.imageHover : style.image}
                    onMouseEnter={() => onMouseHandler(true)}
                    onMouseLeave={() => onMouseHandler(false)}
                />
                {isShown && (
                    <Link href={props.href} onMouseHandler={onMouseHandler}/>
                )}
            </div>
            <h5>{props.title}</h5>
            <p>{props.text}</p>

        </div>
    );
};

const Link: FC<LinkProps> = props => {
    return <a
        href={props.href}
        target="_blank"
        rel="noreferrer"
        className={style.link}
        onMouseEnter={() => props.onMouseHandler(true)}>
        Show
    </a>
};
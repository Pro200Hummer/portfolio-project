import React, {FC} from "react";
import style from "./Portfolio.module.scss";
import {useSelector} from "react-redux";
import {RootStateType} from "../../app/store";
import {PortfolioItemType} from "./portfolioReducer";
import {CardPreviewer} from "./LinkPreviewer/CardPreviewer";
import Flip from "react-awesome-reveal";

export const Portfolio: FC = () => {

    const portfolio = useSelector<RootStateType, PortfolioItemType[]>(state => state.portfolio)

    return (
        <div className={style.container} id={'portfolio'}>
            <Flip>
                <h2 className={style.title}>Portfolio</h2>
            </Flip>
            <div className={style.portfolio}>
                {
                    portfolio.map((p, index) => {
                        return <CardPreviewer
                            key={index}
                            image={p.image}
                            title={p.title}
                            text={p.text}
                            href={p.href}
                        />
                    })}

            </div>
        </div>
    )
};
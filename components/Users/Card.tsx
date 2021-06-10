import Link from "next/link";
import React from "react";
import { useAppDispatch } from "../../hooks/redux";
import { loadUserInfoCreator } from "../../store/creators/users";
import { CardProps } from "../types";

export const Card: React.FC<CardProps> = (props) => {
  const dispatch = useAppDispatch()
  const {name, address, id} = props

  return (
    <div className="card card_user" onClick={() => dispatch(loadUserInfoCreator(props))}>
      <h2 className="card__title">{name}</h2>

      <div className="card__descr">{address.city}</div>

      
      <Link href={`/posts/${id}`}>
        <span className="card__link">Смотреть посты</span>
      </Link>
    </div>
  );
}


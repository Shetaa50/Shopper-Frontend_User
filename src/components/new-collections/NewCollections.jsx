import React, { useEffect, useState } from "react";
import './NewCollections.css';
import Item from "../item/Item";
import { useTranslation } from 'react-i18next';

const NewCollections = () => {
  const [new_collections, setNew_collections] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://shopper-backend-nine.vercel.app/newcollection')
      .then(response => response.json())
      .then((data) => setNew_collections(data));
  }, []);

  return (
    <div className="newcollections">
      <h1>{t('newCollections.title')}</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;

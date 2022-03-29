import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

const collectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>

        {/* when ever collectionPreview changes it will update below everytime */}
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)

export default collectionPreview;
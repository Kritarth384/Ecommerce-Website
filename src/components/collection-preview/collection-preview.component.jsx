import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import { withRouter } from 'react-router-dom'
import './collection-preview.styles.scss';

const collectionPreview = ({title, items, history, match, routeName}) => (
    <div className='collection-preview'>
        <h1 className='title' onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</h1>

        {/* when ever collectionPreview changes it will update below everytime */}
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item ={item} />
                ))
            }
        </div>
    </div>
)

export default withRouter(collectionPreview);
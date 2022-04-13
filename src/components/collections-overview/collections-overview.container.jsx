import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectCollectionFetching } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionsOverviewComponents from "./collections-overview.components";

const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionsOverviewComponents))
// little harder to read

// use compose ...
export const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverviewComponents);
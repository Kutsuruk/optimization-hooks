import CardWrapper from "../../common/Card";

const withPropsStyles = (Component) => (props) => {
    return(
        <CardWrapper>
            <Component {...props} text='hello' name='new Name' />
        </CardWrapper>
    )
}

export default withPropsStyles
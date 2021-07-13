import {connect} from "react-redux";
import {doTest} from "../actions";
import Test from "../components/Test";

const mapStateToProps = state => {
    return {texts: state.texts};
}

const mapDispatchToProps = dispatch => {
    return {
        doTest: (text: string) => {
            console.log("text", text);
            dispatch(doTest(text));
        }
    }
}

const VisibleTest = connect(mapStateToProps, mapDispatchToProps)(Test);
export default VisibleTest;
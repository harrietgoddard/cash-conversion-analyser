import { connect } from "react-redux";
import MainForm from './MainForm';
import { generateReport } from '../../data/action';

const mapDispatchToProps = dispatch => {

    return {
        handleSubmit: data => { 
            dispatch(generateReport(data));
        }
    };
    
};

export default connect(null, mapDispatchToProps)(MainForm);
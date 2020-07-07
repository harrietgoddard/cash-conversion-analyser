import { connect } from "react-redux";
import Commentary from './Commentary';

const mapStateToProps = ({ cashConversion, cashOutflows }) => ({ cashConversion, cashOutflows });

export default connect(mapStateToProps)(Commentary);
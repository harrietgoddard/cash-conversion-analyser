import { connect } from "react-redux";
import ConversionPercentage from './ConversionPercentage';

const mapStateToProps = ({ cashConversion }) => ({ cashConversion });

export default connect(mapStateToProps)(ConversionPercentage);
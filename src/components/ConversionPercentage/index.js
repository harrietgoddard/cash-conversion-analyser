import { connect } from "react-redux";
import ConversionPercentage from './ConversionPercentage';

const mapStateToProps = ({ test }) => ({ test });

export default connect(mapStateToProps)(ConversionPercentage);
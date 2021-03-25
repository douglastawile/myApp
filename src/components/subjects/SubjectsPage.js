import React from "react";
import { connect } from "react-redux";
import * as subjectActions from "../../redux/actions/subjectActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import SubjectList from "./SubjectList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";

class SubjectsPage extends React.Component {
  state = {
    redirectToAddCouresePage: false,
  };

  componentDidMount() {
    const { subjects, actions } = this.props;

    if (subjects.length === 0) {
      actions.loadSubjects().catch((error) => {
        alert("Loading subjects failed" + error);
      });
    }
  }

  render() {
    const handleClick = () => {
      this.setState({ redirectToAddCouresePage: true });
    };

    return (
      <>
        {this.state.redirectToAddCouresePage && <Redirect to="/subject" />}
        <h2>Subjects</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            {" "}
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary"
              onClick={handleClick}
            >
              Add Subject
            </button>
            <SubjectList subjects={this.props.subjects} />
          </>
        )}
      </>
    );
  }
}

SubjectsPage.propTypes = {
  subjects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    subjects: state.subjects,
    loading: state.apiCallsInProgress > 0,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(subjectActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectsPage);

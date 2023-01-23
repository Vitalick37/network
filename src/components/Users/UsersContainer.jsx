import React from "react";
import { follow, 
  unFollow, 
  setUsers, 
  setCurrentPage, 
  setTotalUsersCount, 
  toggleIsFetching, 
  toggleFollowingInProgress,
  getUsersThunkCreator, } from "../../redux/usersReduser";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";
import { compose } from "redux";
import { withAithRedirect } from "../../hoc/withAuthRedirect";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from "../../redux/usersSelectors";


class UsersApiComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    componentDidMount() {

      this.props.getUsers(this.props.currentPage, this.props.pageSize);

      // this.props.toggleIsFetching(true);

      // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      //   .then((data) => {
      //     this.props.toggleIsFetching(false);
      //     this.props.setUsers(data.items);
      //     this.props.setTotalUsersCount(data.totalCount);
      //   });
    }
  
    onPageChanged = (pageNumber) => {

      this.props.getUsers(pageNumber, this.props.pageSize);

      this.props.setCurrentPage(pageNumber);
      // this.props.toggleIsFetching(true);

      // usersAPI.getUsers(pageNumber, this.props.pageSize)
      //   .then((data) => {
      //     this.props.toggleIsFetching(false);
      //     this.props.setUsers(data.items);
      //   });
    };
  
    render() {
  
      return ( 
        <>
        { this.props.isFetching ? <Preloader/> : null}
        <Users count={this.props.count}
                pageSize={this.props.pageSize}
                users={this.props.users}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
    
        />
        </>
      );
  
    }
    }

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         count: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        count: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     }
// }

// export default connect(mapStateToProps, 
//   // mapDispatchToProps
//   {
//   follow: follow,
//   unFollow: unFollow,
//   // setUsers,
//   setCurrentPage,
//   // setTotalUsersCount,
//   // toggleIsFetching,
//   toggleFollowingInProgress,
//   getUsers: getUsersThunkCreator,
//   }
  // )(UsersApiComponent);

  export default compose(
    // withAithRedirect, 
    connect(mapStateToProps, 
    {
    follow: follow,
    unFollow: unFollow,
    setCurrentPage,
    toggleFollowingInProgress,
    getUsers: getUsersThunkCreator,
    }
    ))(UsersApiComponent);
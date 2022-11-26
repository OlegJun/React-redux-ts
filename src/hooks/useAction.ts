import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import UserActionCreators from '../store/action-creaters/index'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}
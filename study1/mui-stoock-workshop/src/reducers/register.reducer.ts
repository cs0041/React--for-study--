import { string } from "prop-types"
import { REGISTER_FAILED, REGISTER_FETCHING, REGISTER_SUCCESS } from "../Constants"


export interface RegisterState {
  isFectching: boolean
  isError: boolean
  result: any
}

const initialState: RegisterState = {
  isFectching: false,
  isError: false,
  result: null,
}

export default (state = initialState, { type, payload }:any ):RegisterState => {
  switch (type) {

  case REGISTER_FETCHING:
    return { ...state, isFectching :true,isError: false,result: null }
  case REGISTER_SUCCESS:
    return { ...state, isFectching :false,isError: false,result: payload }
  case REGISTER_FAILED:
    return { ...state, isFectching :false,isError: true,result: null }

  default:
    return state
  }
}

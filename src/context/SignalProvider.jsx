import PropTypes from "prop-types";
import { createContext, useState } from "react";

 export const signalContext = createContext()

const SignalProvider = ({ children }) => {
      const [signal, setSignal] = useState()
      return (
            <signalContext.Provider value={{ signal, setSignal }}>
                  {children}
            </signalContext.Provider>
      );
};
SignalProvider.propTypes = {
      children: PropTypes.object.isRequired
}
export default SignalProvider
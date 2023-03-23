import { ThemeProvider } from "./7-useContext/ThemeContext";
import FunctionContextComponent from "./7-useContext/FunctionContextComponent";
import InputLocalStorage from "./0-useLocalStorage/InputLocalStorage";
import ToggleComponent from "./1-useToggle/ToggleComponent";
import TimeoutComponent from "./2-useTimeout/TimeoutComponent";
import UpdateEffectComponent from "./4-useUpdateEffect/UpdateEffectComponent";
import ArrayComponent from "./5-useArray/ArrayComponent";
import PreviousComponent from "./6-usePrevious/PreviousComponent";
import StorageComponent from "./8-useStorage/StorageComponent";
import AsyncComponent from "./9-useAsync/AsyncComponent";
import FetchComponent from "./10-useFetch/FetchComponent";
import ScriptComponent from "./11-useScript/ScriptComponent";
import DeepCompareEffectComponent from "./12-useDeepCompareEffect/DeepCompareEffectComponent";

function App() {


	return (
		<ThemeProvider>
			<FunctionContextComponent />
			<InputLocalStorage />
			<ToggleComponent />
			<TimeoutComponent />
			<UpdateEffectComponent />
			<ArrayComponent />
			<PreviousComponent />
			<StorageComponent />
			<AsyncComponent />
			<FetchComponent />
			<ScriptComponent />
			<DeepCompareEffectComponent/>
		</ThemeProvider>
	)
}

export default App;

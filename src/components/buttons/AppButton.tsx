import { TouchableOpacity } from "react-native";

interface AppButtonProps {
    onPress: () => void
}
const AppButton = (appButtonProps: AppButtonProps) => {
    const { onPress } = appButtonProps
    return (
        <TouchableOpacity onPress={onPress}></TouchableOpacity>
    )
}
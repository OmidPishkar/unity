import {create} from "zustand";


interface Props {
    active : boolean;
    setActive : (val : boolean) => void;
};

const useActiveSidebar = create<Props>( set => ({
    active : false,
    setActive(val : boolean) {
        set({active : val})
    },
}));

export default useActiveSidebar;
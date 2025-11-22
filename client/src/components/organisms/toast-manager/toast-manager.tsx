import { useContext, useRef } from "react";
import { ToastContext } from "@/contexts/toast-context";
import useWindowSize from "@/hooks/use-window-size";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Toast from "@/components/atoms/toast";
import ToastInterface from "@/types/interfaces/toast";


const ToastItem = ({ toast }: { toast: ToastInterface }) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    return (
        <CSSTransition
            nodeRef={nodeRef}
            timeout={200}
            classNames="slide-in"
            unmountOnExit
        >
            <Toast ref={nodeRef} {...toast} />
        </CSSTransition>
    );
};

const ToastManager = () => {
    const { toasts } = useContext(ToastContext);
    const { heightStr } = useWindowSize();

    return (
        <div
            className="left-4 top-4 sm:top-auto sm:bottom-4 fixed z-40 right-4 sm:w-96 overflow-y-auto scrollbar-hidden"
            style={{ maxHeight: `calc(${heightStr} - 2rem)` }}
        >
            <TransitionGroup className="space-y-2">
                {toasts.reverse().map((toast) => (
                    <ToastItem key={toast.id} toast={toast} />
                ))}
            </TransitionGroup>
        </div>
    );
};

export default ToastManager;
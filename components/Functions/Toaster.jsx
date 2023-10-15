import 'styles/components/toast.css'

import toast from 'react-simple-toasts'

export default function ThrowToast(){
    const taskPromise = new Promise((resolve) => setTimeout(resolve, 3000))
        const taskToast = toast('Started downloading...', {
            className: 'my-toast centre radius-small',
            loading: taskPromise,
            duration: Infinity,
        })

        taskPromise.then(()=>{
            taskToast.update({
            message: 'Finished download',
            duration: 1000
        })
    })
}
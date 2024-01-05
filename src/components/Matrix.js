import { useEffect } from "react"
import { useStore } from "../zustand.config"

export const Matrix = () => {
    const store = useStore()

    useEffect(() => {
        let timer = null
  
        function resizeEvent() {
          store.setMobile(window.innerWidth <= 1680)
          if(timer) { clearInterval(timer)}
  
          let canvas = document.getElementById("matrix")
          let context = canvas.getContext("2d")
      
          canvas.width = window.innerWidth
          canvas.height = window.innerHeight
      
          let marks = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
          let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          let numbers = "0123456789"
      
          let alphabet = marks + letters + numbers
          let size = 16
          let columns = canvas.width / size
          let rains = []
      
          for(let x=0; x<columns; x++) {
            rains[x] = 1
          }
      
          function matrixEvent() {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)'
            context.fillRect(0, 0, canvas.width, canvas.height)
            
            context.fillStyle = "#6366f199"
            // context.fillStyle = "#ed143d99"
            context.fontSize = size + 'px monospace'
            context.position = "fixed"
          
            for(let i = 0; i < rains.length; i++)
            {
              const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
              context.fillText(text, i*size, rains[i]*size)
              
              if(rains[i]*size > canvas.height && Math.random() > 0.975) {
                rains[i] = 0
              }
              rains[i]++
            }
          }
          
          timer = setInterval(matrixEvent, 60)
        }
    
        window.addEventListener("resize", resizeEvent, false);
        resizeEvent()
        return () => { window.removeEventListener("resize", resizeEvent, false) }
      }, [])

    return (
        <canvas id="matrix" className={`fixed z-[-1]`}/>
    )
}
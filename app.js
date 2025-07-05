
// GSAP plugins are already loaded via CDN in the HTML file
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable





//mobile menu management
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click",()=>{
    menuToggle.classList.toggle("active")
    mobileMenu.classList.toggle("active")

   if(mobileMenu.classList.contains("active")){
      body.style.overflow = "hidden"
   } else{
    body.style.overflow =""
   }
})


//loading animation

function initLoader(){
    const loader = document.querySelector(".loader")
    const loaderText = document.querySelector(".loader-text")
    const loaderProgress = document.querySelector(".loader-progress")

    //animation loadeer
    gsap.to(loaderText,{
        opacity:1,
        duration:0.7,
        ease:"power2.out",
    })


    //progress bar

    gsap.to(loaderProgress,{
        width:"100%",
        duration:2,
        ease:"power2.inOut",
        onComplete:() =>{
             gsap.to(loader,{
                opacity:0,
                duration:0.7,
                onComplete: () =>{
                    loader.style.display = "none"
                    initAnimations()
                }
             })
        }
    })
}


//iniitlaize loader on page load
window.addEventListener("load", initLoader)




// initlaize all animations
function  initAnimations(){
    //nav animatoin
    gsap.to("nav", {
        y:0,
        duration:1,
        ease:"power3.out",
    }) 

    //main animation

    const mainT1 = gsap.timeline()
    mainT1
      .to(".tag-box",{
        opacity:1,
        filter: 'blur(0px)',
        y:0,
        duration: 1.2,
        ease:"power3.out",
      })

      .to(".headd",{
        opacity:1,
        filter: 'blur(0px)',
        y:0,
        duration: 0.8,
        ease:"power3.out",
      },"-=0.5")   
      .to(".description",{
        opacity:1,
        filter: 'blur(0px)',
        y:0,
        duration: 0.8,
        ease:"power3.out",
      },"-=0.3")   

    // second page (smoosh section) animation
  const smooshT1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".smoosh",
      start: "top 80%", // when the top of smoosh hits 80% of viewport
    }
  });

  smooshT1
    .from(".smoosh-header", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    })
    .from(".smoosh-left p", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .from(".prompt-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    }, "-=0.6")
    .from(".smoosh-right", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      ease: "back.out(1.7)"
    }, "-=0.8");
    // Page 3: Aurax section animation
const auraxT1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aurax-container",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});

auraxT1
  .from(".auraxhead", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  })
  .from(".auraxsub", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5")
  .from(".suggestions", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.4")
  .from(".suggestions-item", {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.6")
  .from(".aurax-prompt-wrapper", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out"
  }, "-=0.5");

  

// Page 4: Footer animation
const footerT1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 90%",
    toggleActions: "play none none reverse"
  }
});

footerT1
  .from(".cta-section", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out"
  })
  .from(".cta-title", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")
  .from(".cta-subtitle", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.5")
  .from(".cta-button", {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: "back.out(1.7)"
  }, "-=0.4")
  .from(".footer-content > *", {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4")
  .from(".footer-bottom", {
    opacity: 0,
    y: 20,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.4");

}






//set random words
const promptBtn = document.querySelector(".prompt-btn")
const promptInput = document.querySelector(".prompt-input")
const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch's cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];

//fill prompt with random example
promptBtn.addEventListener("click", () =>{
  const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)]
  promptInput.value = prompt
  promptInput.focus();
})

//set forms
const promptForm = document.querySelector(".prompt-form")
const modelSelect = document.getElementById("model-select")
const countSelect = document.getElementById("count-select")
const ratioSelect = document.getElementById("ratio-select")
const generateBtn = document.querySelector(".generator-btn")

// FREE API CONFIGURATIONS
const FREE_APIS = {
  pollinations: {
    url: "https://image.pollinations.ai/prompt/",
    requiresKey: false
  },
  picsum: {
    url: "https://picsum.photos/",
    requiresKey: false
  }
}

const getImageDimensions = (aspectRatio, baseSize = 512) => {
   const [width, height] = aspectRatio.split("/").map(Number)
   const scaleFactor = baseSize / Math.sqrt(width * height)

   let calculatedWidth = Math.round(width * scaleFactor)
   let calculatedHeight = Math.round(height * scaleFactor)

   calculatedWidth = Math.floor(calculatedWidth/16) * 16
   calculatedHeight = Math.floor(calculatedHeight/16) * 16

   return {width: calculatedWidth, height: calculatedHeight}
}

//replace loading spinner with actual image
const updateImageCards = async (imgIndex, imgUrl) => {
  const imgCard = document.getElementById(`img-card-${imgIndex}`);
  if (!imgCard) return;

  try {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const filename = `image-${Date.now()}.png`;

    imgCard.classList.remove("loading");
    imgCard.innerHTML = `
      <img src="${objectURL}" class="result-img"/>
      <div class="img-overlay">
        <button class="img-download-btn" data-url="${objectURL}" data-name="${filename}">
          <i class="fa-solid fa-download"></i>
        </button>
      </div>`;
  } catch (err) {
    console.error("Failed to fetch image:", err);
  }
};

document.addEventListener("click", (e) => {
  const downloadBtn = e.target.closest(".img-download-btn");
  if (downloadBtn) {
    const url = downloadBtn.dataset.url;
    const filename = downloadBtn.dataset.name;

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
});



// Generate image using Pollinations AI (Free)
const generateWithPollinations = async (promptText, width, height, seed) => {
  try {
    const encodedPrompt = encodeURIComponent(promptText)
    const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&seed=${seed}&enhance=true&nologo=true`
    
    // Test if image loads successfully
    const response = await fetch(imageUrl)
    if (!response.ok) throw new Error('Failed to generate image')
    
    return imageUrl
  } catch (error) {
    throw new Error(`Pollinations API failed: ${error.message}`)
  }
}

// Fallback: Generate placeholder with Picsum (for demo purposes)
const generateWithPicsum = async (width, height, seed) => {
  try {
    const imageUrl = `https://picsum.photos/${width}/${height}?random=${seed}`
    const response = await fetch(imageUrl)
    if (!response.ok) throw new Error('Failed to generate placeholder')
    return imageUrl
  } catch (error) {
    throw new Error(`Picsum API failed: ${error.message}`)
  }
}

// Main image generation function with fallback
const generateSingleImage = async (promptText, width, height, seed) => {
  try {
    // Try Pollinations AI first (free and good quality)
    return await generateWithPollinations(promptText, width, height, seed)
  } catch (error) {
    console.warn('Primary API failed, using fallback:', error.message)
    
    try {
      // Fallback to Picsum (just for demo - shows placeholder images)
      return await generateWithPicsum(width, height, seed)
    } catch (fallbackError) {
      throw new Error('All APIs failed')
    }
  }
}

// Updated main generation function
const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
    const {width, height} = getImageDimensions(aspectRatio)
    generateBtn.setAttribute("disabled", "true")

    // Create array of image generation promises
    const imagePromises = Array.from({length: imageCount}, async(_, i) => {
      try {
        // Generate unique seed for each image
        const seed = Date.now() + i + Math.floor(Math.random() * 1000)
        
        // Generate image using free APIs
        const imageUrl = await generateSingleImage(promptText, width, height, seed)
        
        // Update the image card with generated image
        updateImageCards(i, imageUrl)
        
      } catch (error) {
        console.error(`Image ${i} generation failed:`, error)
        const imgCard = document.getElementById(`img-card-${i}`)
        if (imgCard) {
          imgCard.classList.replace("loading", "error")
          const statusText = imgCard.querySelector(".status-text")
          if (statusText) {
            statusText.textContent = "Generation failed! Please try again."
          }
        }
      }
    })

    // Wait for all images to complete
    await Promise.allSettled(imagePromises)
    generateBtn.removeAttribute("disabled")
}

//get placeholder cards with loading spinner 
const gridGallery = document.querySelector(".gallery-grid")

const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
  gridGallery.innerHTML = "";
  
  for (let i = 0; i < imageCount; i++) {
    gridGallery.innerHTML += ` <div class="img-card loading" id="img-card-${i}" style="aspect-ratio:${aspectRatio}">
                  <div class="status-container">
                    <div class="spinner"></div>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p class="status-text">Generating...</p>
                  </div>
                </div>`
  }

  generateImages(selectedModel, imageCount, aspectRatio, promptText)
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  const selectedModel = modelSelect.value
  const imageCount = parseInt(countSelect.value) || 1
  const aspectRatio = ratioSelect.value || "1/1"
  const promptText = promptInput.value.trim()

  if (!promptText) {
    alert('Please enter a prompt description!')
    return
  }

  const styledPrompt = `${promptText}, in ${selectedModel} style`;
  createImageCards(selectedModel, imageCount, aspectRatio, styledPrompt)
}

promptForm.addEventListener("submit", handleFormSubmit)



/** aurax handling */
const container = document.querySelector(".aurax-container")
const chatsContainer = document.querySelector(".chats-container")
const auraxPromptForm = document.querySelector(".aurax-prompt-form")
const auraxPromptInput = auraxPromptForm.querySelector(".aurax-prompt-input")
const fileInput = auraxPromptForm.querySelector("#file-input")
const fileUploadWrapper = auraxPromptForm.querySelector(".file-upload-wrapper")


//api setup
const API_KEY = "AIzaSyCj8JBoiFF_CFKVq34M52za5G9F1mcZ9ms";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`




let typingInterval,controller
const chatHistory =[]
const userData = { message: "", file: {} }


//function to create message elements
const createMsgElement = (content,...classes) => {
  const div = document.createElement("div")
  div.classList.add("message", ...classes)
  div.innerHTML = content
  return div
}

//scroll to the bottom of  the container
const scrollToBottom = () => container.scrollTo({top: container.scrollHeight, behavior: "smooth"})



//simulate typing effect for bot responses
const typingEffect = (text, textElement, botMsgDiv) => {
  textElement.textContent =""
  const words = text.split(" ")
  let wordIndex =0;

  //set an interval to type each word
 typingInterval = setInterval(() => {
  if(wordIndex < words.length){
    textElement.textContent += (wordIndex ===0 ? "": " ") + words[wordIndex++];
    scrollToBottom();
  } else{
    clearInterval(typingInterval);
    botMsgDiv.classList.remove("loading");
    document.body.classList.remove("bot-responding")

  }
}, 40)

}














//make api call and generate bot response
const generateResponse = async (botMsgDiv) => {

  const textElement = botMsgDiv.querySelector(".message-text")
  controller = new AbortController()



  //add user message and file data to the chat history
  chatHistory.push({
     role: "user",
     parts: [{text:userData.message},
       ...(userData.file.data ? 
        [
          { inline_data: (({ fileName, isImage,
      ...rest}) => rest)(userData.file)}]: [])]
  })



  try{
    //send the cht history to the api to get a response
      const ressponse = await fetch(API_URL,{
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({contents: chatHistory}),
         signal: controller.signal
      });


      const data = await ressponse.json()
      if(!ressponse.ok) throw new Error(data.error.message)
      
      //Process the response text and display with typing effect
      const responseText = data.candidates[0].content.parts[0].text.replace(/\*\*([^*]+)\*\*/g, "$1").trim()
      typingEffect(responseText, textElement, botMsgDiv)
      
      chatHistory.push({role:"model",parts:[{text:responseText}]})
    } catch (error){
        textElement.style.color = "#d62939"
        textElement.textContent = error.name === "AbortError" ? "Response generation stopped." : error.message;
        botMsgDiv.classList.remove("loading");
        document.body.classList.remove("bot-responding")
  } finally {
    userData.file = {}
  }
}




//handleform submission
const handleeFormSubmit = (e) => {
  e.preventDefault()
  const userMessage = auraxPromptInput.value.trim()
  if(!userMessage || document.body.classList.contains("bot-responding")
) return


  auraxPromptInput.value =""
  userData.message = userMessage
  document.body.classList.add("bot-responding", "chats-active")
  fileUploadWrapper.classList.remove("active", "img-attached" , "file-attached")

  


  //generate user message html and add in the container
  const userMsgHTML = `
  <p class="message-text"></p>
   ${userData.file.data ? (userData.file.isImage ? `<img src="data:${userData.file.mime_type};base64,
   ${userData.file.data}" class="img-attachment" />` :`<p class="file-attachment"><span
    class="material-symbols-rounded">description</span>${userData.file.fileName}</p>`):""}
  `;

  const userMsgDiv = createMsgElement(userMsgHTML,"user-message")
  userMsgDiv.querySelector(".message-text").textContent = userMessage;
  chatsContainer.appendChild(userMsgDiv)
  scrollToBottom()

  
  setTimeout(() => {

     //Generate bot message Html and add in the chats container in 600ms
  const botMsgHTML = `<img src="aurax.svg" class="avatar">
<p class="message-text">Just a sec...</p>`
  const botMsgDiv = createMsgElement(botMsgHTML,"bot-message","loading")
  chatsContainer.appendChild(botMsgDiv)
  scrollToBottom()
  generateResponse(botMsgDiv)

  }, 600)
}

//handle file input change (file upload)
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0]
  if(!file) return

  const isImage = file.type.startsWith("image/")
  const reader = new FileReader()
  reader.readAsDataURL(file)


  reader.onload = (e) => {
    fileInput.value = "";
    const base64String = e.target.result.split(",")[1]
    fileUploadWrapper.querySelector(".file-preview").src = e.target.result;
    fileUploadWrapper.classList.add("active", isImage ? "img-attached" : "file-attached") 
   
    //store file data in userData obj
    userData.file = { fileName: file.name, data: base64String, mime_type: file.type, isImage}
    

  
  }

})

//cancel file upload
document.querySelector("#cancel-file-btn").addEventListener("click", () => {
  userData.file ={}
  fileUploadWrapper.classList.remove("active", "img-attached" , "file-attached")
})

//stop ongoing bot response
document.querySelector("#stop-response-btn").addEventListener("click", () => {
  userData.file ={}
  controller?.abort()
  clearInterval(typingInterval) 
  chatsContainer.querySelector(".bot-message.loading").classList.remove("loading")
  document.body.classList.remove("bot-responding")
})



//delete all chats
document.querySelector("#delete-chats-btn").addEventListener("click", () => {
  chatHistory.length = 0;
  chatsContainer.innerHTML = ""
    document.body.classList.remove("bot-responding", "chats-active")

})

//handle suggestion click
document.querySelectorAll(".suggestions-item").forEach(item => {
  item.addEventListener("click", ()=>{
    auraxPromptInput.value = item.querySelector(".text").textContent
    auraxPromptForm.dispatchEvent(new Event("submit"))
  })
})


//show/hide contorls for mobile hotspot on prompt input focus
document.addEventListener("click", ({target}) => {
  const wrapper = document.querySelector(".aurax-prompt-wrapper");
  const shouldHide = target.classList.contains("aurax-prompt-input") || (wrapper.classList.contains
    ("hide-controls") && (target.id === "add-file-btn" || target.id === "stop-response-btn"))
    wrapper.classList.toggle("hide-controls", shouldHide)
})



auraxPromptForm.addEventListener("submit",handleeFormSubmit)
auraxPromptForm.querySelector("#add-file-btn").addEventListener("click", () => fileInput.click())



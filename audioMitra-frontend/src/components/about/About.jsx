
const About = () => {

  return (
    <>
      <div className='text-3xl font-semibold mx-20 mt-1'>
        About Us
      </div>

      <div className="flex nowrap">
        <div className="mx-20 text-justify w-1/2">
          <p className="mb-2 introA">Avatar is a document and content transformation platform to provide authentic and trustworthy transformations of both printed as well as handwritten documents using the computational power of artificial intelligence and cognitive power of human in the loop.</p>
          <p className="mb-2">
            Humans have tried to constantly simplify their lives by bringing in changes through innovation. Avatar is one such small but innovative effort in the domain of language and text processing. Avataar is a document and content transformation system. It can perform two kinds of digital transformations – medium transformation and language transformation.
          </p>
          <p className="mb-2">
            In case of medium transformation, it transforms from non-digital medium to digital medium, like paper document to digital files/document, i.e., digitization of the content; or it can transform from one digital medium to other digital medium like, digital image to equivalent text; or text to equivalent audio forms using text-to-speech. These transformations include paper-to-digital-images, image-to-text, text-to-speech, etc.
            Similarly, in case of language transformation, it transforms content from one Indian language to one or more other Indian languages, including English. Language transformation requires machine translation along with human in the loop to ensure acceptable degree of accuracy and trust.
          </p>
          <p className="mb-2">
            In the process of transformation, Avataar optionally requires intervention of man and machine in a collaborative manner to perform authentic and trustworthy transformations. Use of man and machine depends upon the specific requirements of the work flow for various kinds of tasks.  The proportion of human involvement primarily depends upon the acceptable level of accuracy and the kind of transformations requested.
          </p>
        </div>
        <div className="w-1/2">
          <img className="w-full h-full" src="" alt="" />
        </div>
      </div>
    </>
  )
}

export default About
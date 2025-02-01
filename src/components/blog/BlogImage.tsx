import React from "react"

interface BlogImageTypes {
  imageSrc: string
  description: string
}

const BlogImage: React.FC<BlogImageTypes> = ({imageSrc, description}) => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <img src={imageSrc} />
      <p><small>{description}</small></p>
    </div>
  )
}

export default BlogImage
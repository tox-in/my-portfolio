export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'projectLink',
            title: 'ProjectLink',
            type: 'string',
        },
        {
            name: 'codeLink',
            title: 'CodeLink',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            Options: {
                hotspot: true
            }
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string',
                }
            ]
        }
    ]
}
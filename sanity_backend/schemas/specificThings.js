export default {
    name: 'specificThings',
    title: 'Specific things',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
        },
        {
            name:'navBarLogo',
            title:'Logo',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name:'bannerImage',
            title:'Imagen del banner',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'bannerIcons',
            title: 'Iconos del banner',
           type:'array',
           of: [
            {
                name:'bannerImage',
                title:'Imagen del banner',
                type: 'image',
                options: {
                  hotspot: true,
                },
            },
           ]
          },
    ]
}
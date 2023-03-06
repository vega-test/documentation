/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const { protodocs } = require('./docs/api/grpc/sidebar')
const datav2 = require('./docs/api/rest/data-v2/sidebar.js')
const core = require('./docs/api/rest/core/sidebar.js')
const state = require('./docs/api/rest/state/sidebar.js')
const explorer = require('./docs/api/rest/explorer/sidebar.js')

module.exports = {
  concepts: [
    {
      type: 'autogenerated',
      dirName: 'concepts'
    }
  ],
  api: [
    'api/overview',
    {
      type: 'category',
      label: 'GraphQL',
      collapsed: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'api/graphql/schema'
        },
        {
          type: 'autogenerated',
          dirName: 'api/graphql'
        }
      ]
    },
    {
      type: 'category',
      label: 'GRPC',
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'api/grpc/overview'
        },
        ...protodocs[0].items
      ]
    },
    {
      type: 'category',
      label: 'REST',
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'api/rest/overview',
          label: 'Overview'
        },
        datav2,
        explorer,
        core,
        state
      ]
    },
    {
      type: 'category',
      label: 'Ethereum bridge',
      collapsed: true,
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/bridge'
        }
      ]
    },
    {
      type: 'category',
      label: 'Wallet API',
      collapsed: true,
      link:{"type":"generated-index","title":"Wallet API","slug":"/category/api/wallet-api/"},
      items: [
        {
          type: 'autogenerated',
          dirName: 'api/vega-wallet'
        }
      ]
    },
  ],
  tutorials: [
    {
      type: 'autogenerated',
      dirName: 'tutorials',
    }  
  ],
  tools: [
    {
      type: 'autogenerated',
      dirName: 'tools'
    }
  ],
  'node-operators': [
    {
      type: 'autogenerated',
      dirName: 'node-operators'
    }
  ]
}

module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    },
    "ie": {
      "type": "confirm",
      "message": "Support IE or older browser?"
    },
    "vuex": {
      "type": "confirm",
      "message": "Use vuex?"
    }
  },
  "filters": {
    "src/components/views/todo/**/*": "vuex",
    "src/store/**/*": "vuex",
    "typings/interface/state.d.ts": "vuex"
  },
  "completeMessage": "{{#inPlace}}To get started:\n\n  npm install\n  npm run dev.{{else}}To get started:\n\n  cd {{destDirName}}\n  yarn\n  yarn dll\n  yarn dev.{{/inPlace}}"
}
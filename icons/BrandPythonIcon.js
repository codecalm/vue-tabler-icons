import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'BrandPythonIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-brand-python"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "11",
        y1: "6",
        x2: "11",
        y2: "6.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "13",
        y1: "18",
        x2: "13",
        y2: "18.01"
      }
    }), " "]);
  }
};
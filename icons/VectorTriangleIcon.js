import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'VectorTriangleIcon',
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
      "class": "icon icon-tabler icon-tabler-vector-triangle"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "10",
        y: "4",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "3",
        y: "17",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("rect", {
      attrs: {
        x: "17",
        y: "17",
        width: "4",
        height: "4",
        rx: "1"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6.5",
        y1: "17.1",
        x2: "11.5",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "17.5",
        y1: "17.1",
        x2: "12.5",
        y2: "8"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "7",
        y1: "19",
        x2: "17",
        y2: "19"
      }
    }), " "]);
  }
};
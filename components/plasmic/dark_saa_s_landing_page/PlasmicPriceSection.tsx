// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dAqQBMeJHbYqKfBBXQoZSJ
// Component: r1raNffwULrPYJ
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import PriceCard from "../../PriceCard"; // plasmic-import: yLAMK-jV2-ynxg/component

import { useScreenVariants as useScreenVariantst5DG9Htuemp9Ba } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: t5dG9Htuemp9ba/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_dark_saa_s_landing_page.module.css"; // plasmic-import: dAqQBMeJHbYqKfBBXQoZSJ/projectcss
import sty from "./PlasmicPriceSection.module.css"; // plasmic-import: r1raNffwULrPYJ/css

export type PlasmicPriceSection__VariantMembers = {};
export type PlasmicPriceSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicPriceSection__VariantsArgs;
export const PlasmicPriceSection__VariantProps = new Array<VariantPropType>();

export type PlasmicPriceSection__ArgsType = {};
type ArgPropType = keyof PlasmicPriceSection__ArgsType;
export const PlasmicPriceSection__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceSection__OverridesType = {
  root?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface DefaultPriceSectionProps {
  className?: string;
}

function PlasmicPriceSection__RenderFunc(props: {
  variants: PlasmicPriceSection__VariantsArgs;
  args: PlasmicPriceSection__ArgsType;
  overrides: PlasmicPriceSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantst5DG9Htuemp9Ba()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___33O3U)}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__oJgRh)}>
              <PriceCard
                borders={["flatLeft"]}
                className={classNames("__wab_instance", sty.priceCard__w1Slj)}
              />
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___3TxuU)}>
              <div className={classNames(projectcss.all, sty.freeBox___0LKTr)}>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"We Recommended"}
                </div>
              </div>

              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <PriceCard
                  borders={["flatCenter"]}
                  className={classNames(
                    "__wab_instance",
                    sty.priceCard___9Xdsf
                  )}
                />
              ) : null}
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__xqw0P)}>
              <PriceCard
                borders={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? ["flatRight"]
                    : ["flatRight"]
                }
                className={classNames("__wab_instance", sty.priceCard__uhnjn)}
              />
            </div>
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceSection__VariantsArgs;
    args?: PlasmicPriceSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPriceSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPriceSection__ArgProps,
          internalVariantPropNames: PlasmicPriceSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPriceSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceSection";
  } else {
    func.displayName = `PlasmicPriceSection.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceSection = Object.assign(
  // Top-level PlasmicPriceSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicPriceSection
    internalVariantProps: PlasmicPriceSection__VariantProps,
    internalArgProps: PlasmicPriceSection__ArgProps
  }
);

export default PlasmicPriceSection;
/* prettier-ignore-end */

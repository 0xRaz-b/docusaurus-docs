---
sidebar_position: 3
id: singularity
title: Singularity
---

# Singularity

Singularity is an Omnichain isolated lending engine inspired by the Kashi Lending Engine created by BoringCrypto. Singularity allows users to borrow, leverage up, and lend from many disparate networks, achieving unparalleled capital efficiency through liquidity defragmentation and collateral rehypothecation.

Singularity & BigBang share the same market engine, with BigBang acting as the module to mint USDO, and Singularity acting as another module to create an isolated money market for leveraging yield bearing collaterals such as sDAI & GLP with lent USDO.

## 01 / Isolated Markets

Unlike most DeFi money markets where high-risk assets can introduce systemic risk to the entire protocol, each market within Singularity is entirely isolated, meaning the risk of an asset within one market has no effect over the risk of another market or the protocol itself.

In addition, isolating the risks of the different lending markets enables users to achieve leverage in one operation, without ever leaving the platform or needing to "loop" borrow & swap operations which are gas intensive and inefficient.

:::info
Max leverage is dictated by the market's LTV, using this formula: (1/(1-LTV)) \* 0.95
:::

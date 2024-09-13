---
sidebar_position: 3
id: singularity
title: Singularity
---

export const InfoBox = ({children}) => (

  <div style={{
    backgroundColor: '#F1F5FF',
    borderLeft: '12px solid #464CBC',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: '8px'
    }}>
      <span style={{
        backgroundColor: '#4A90E2',
        color: 'white',
        borderRadius: '4px',
        padding: '2px 6px',
        marginRight: '8px',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        i
      </span>
      <span style={{
        color: '#4A90E2',
        fontWeight: 'bold'
      }}>
        INFO
      </span>
    </div>
    <div style={{
      color: '#333',
      fontSize: '14px'
    }}>
      {children}
    </div>
  </div>
);

# Singularity

Singularity is an Omnichain isolated lending engine inspired by the [Kashi Lending Engine](https://github.com/boringcrypto/kashi-lending) created by BoringCrypto. Singularity allows users to borrow, leverage up, and lend from many disparate networks, achieving unparalleled capital efficiency through liquidity defragmentation and collateral rehypothecation.

Singularity & [BigBang](https://github.com/Tapioca-DAO/tapioca-bar-audit/blob/master/contracts/markets/bigBang/BigBang.sol) share the same market engine, with BigBang acting as the module to mint [USDO](https://github.com/Tapioca-DAO/Tapioca-bar/blob/d8818fa3b36240ef2d02ccfff0936967b241b067/contracts/usdo/Usdo.sol#L82), and Singularity acting as another module to create an isolated money market for leveraging yield bearing collaterals such as sDAI & GLP with lent USDO.

## Isolated Markets

Unlike most DeFi money markets where high-risk assets can introduce systemic risk to the entire protocol, each market within Singularity is entirely isolated, meaning the risk of an asset within one market has no effect over the risk of another market or the protocol itself.

In addition, isolating the risks of the different lending markets enables users to achieve [leverage](https://github.com/Tapioca-DAO/Tapioca-bar/blob/d8818fa3b36240ef2d02ccfff0936967b241b067/contracts/markets/bigBang/BBLeverage.sol#L1) in one operation, without ever leaving the platform or needing to "loop" borrow & swap operations which are gas intensive and inefficient.

<InfoBox>
<strong>Max leverage</strong> is dictated by the market's LTV, using this formula: (1/(1-LTV)) * 0.95
</InfoBox>

## Elastic Interest Rates

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.

## Singularity vs BigBang

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Nullam euismod, nisi vel consectetur interdum

## Singularity Positions

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Nullam euismod, nisi vel consectetur interdum

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc.

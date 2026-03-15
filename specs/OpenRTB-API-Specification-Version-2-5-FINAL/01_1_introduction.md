# 1. Introduction

## 1.1 Mission / Overview

The mission of the OpenRTB project is to spur growth in Real-Time Bidding (RTB) marketplaces by providing open industry standards for communication between buyers of advertising and sellers of publisher inventory. There are several aspects to these standards including but not limited to the actual real-time bidding protocol, information taxonomies, offline configuration synchronization, and many more.

This document specifies a standard for the Real-Time Bidding Interface that has grown out of previous OpenRTB collaboration on the "block list project" and the "OpenRTB Mobile" project. These protocol standards aim to simplify the connection between suppliers of publisher inventory (i.e., exchanges, networks working with publishers, and sell-side platforms) and competitive buyers of that inventory (i.e., bidders, demand side platforms, or networks working with advertisers).

The overall goal of OpenRTB is and has been to create a *lingua franca* for communicating between buyers and sellers. The intent is not to regulate exactly how each business operates. As a project, we aim to make integration between parties easier, so that innovation can happen at a deeper level at each of the businesses in the ecosystem.

## 1.2 History of OpenRTB

OpenRTB was launched as a pilot project between three demand-side platforms (DataXu, MediaMath, and Turn) and three sell-side platforms (Admeld, PubMatic, and The Rubicon Project) in November 2010. The first goal was to standardize communication between parties for exchanging block lists. Version 1.0 of the OpenRTB block list specification was released in December 2010.

After a positive response from the industry, Nexage approached the OpenRTB project with a proposal to create an API specification for OpenRTB focusing on the actual real-time bid request/response protocol and specifically to support mobile advertising. The mobile subcommittee was formed between companies representing the buy-side (DataXu, Fiksu, and [X+1]) and companies representing the sell-side (Nexage, Pubmatic, Smaato, and Jumptap). This project resulted in the OpenRTB Mobile 1.0 specification, which was released in February 2011.

Following the release of the mobile specification, a video subcommittee was formed with video ad exchanges (BrightRoll and Adap.tv) collaborating with DataXu and ContextWeb to incorporate support for video. The goal was to incorporate support for display, video, and mobile in one document. This effort resulted in OpenRTB 2.0, which was released as a unified standard in June 2011.

Due to very widespread adoption by the industry, OpenRTB was adopted as an IAB standard in January 2012 with the release of version 2.1. Governance over the technical content of the specification remains with the OpenRTB community and its governance rules.

## 1.3 Version History

**OpenRTB Real-Time Bidding API**

| Version | Description |
|---|---|
| 2.5 | Support for header bidding, billing and loss notifications, Flex Ads, Payment ID, tactic ID, impression metrics, out-stream video, and many more minor enhancements. |
| 2.4 | Support for Audio ad units and the largest set of minor to moderate enhancements in v2.x history. |
| 2.3 | Support for Native ad units and multiple minor enhancements. |
| 2.2 | New enhancements for private marketplace direct deals, video, mobile, and regulatory signals. |
| 2.1 | Revisions for IQG compliance, minor enhancements, and corrections. |
| 2.0 | Combines display, mobile, and video standards into a unified specification. |
| 1.0 | Original Release of OpenRTB Mobile. |

**OpenRTB Display Block List Branch**

| Version | Description |
|---|---|
| 1.2 | Publisher Preferences API *(proposed)*. |
| 1.1 | Minor edits to include real-time exchange of creative attributes. |
| 1.0 | Original Release of OpenRTB block list specifications. |

## 1.4 Resources

| Resource | URL |
|---|---|
| OpenRTB GitHub Repository | github.com/openrtb/OpenRTB/ |
| Development Community Mailing List | groups.google.com/group/openrtb-dev |
| User Community Mailing List | groups.google.com/group/openrtb-user |

## 1.5 Terminology

The following terms are used throughout this document specifically in the context of the OpenRTB Interface and this specification.

| Term | Definition |
|---|---|
| RTB | Bidding for individual impressions in real-time (i.e., while a consumer is waiting). |
| Exchange | A service that conducts an auction among bidders per impression. |
| Bidder | An entity that competes in real-time auctions to acquire impressions. |
| Seat | An advertising entity (e.g., advertiser, agency) that wishes to obtain impressions and uses bidders to act on their behalf; a customer of a bidder and usually the owner of the advertising budget. |
| Publisher | An entity that operates one or more sites. |
| Site | Ad supported content including web and applications unless otherwise specified. |
| Deal | A pre-arranged agreement between a Publisher and a Seat to purchase impressions under certain terms. |
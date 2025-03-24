#![allow(non_snake_case)]

pub mod api {
  include!("getting.v1.rs");
}
pub use api::*;

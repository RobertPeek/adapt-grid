import Adapt from 'core/js/adapt';
import React from 'react';
import { html, classes, compile, templates } from 'core/js/reactHelpers';

export default function Grid (props) {
  const {
    _columns
  } = props;

  const screenSize = Adapt.device.screenSize;

  return (
    <div className="component__inner grid__inner">

      <templates.header {...props} />

      <div className="component__widget grid__widget">

        <div className="grid__content">

          <div
            className={classes([
              'grid__container',
              'columns-'+_columns,
              screenSize === 'small' ? 'is-mobile' : null
            ])}
          >

            {props._items.map(({ _classes, _position, _text, _graphic, _index }, index) =>

              <div
                className={classes([
                  'grid__item',
                  'grid__item-'+_index,
                  _position._vPosition,
                  _position._hPosition
                ])}
                key={_index}
                data-index={_index}
              >

                <div
                  className={classes([
                    'grid__item-inner',
                    _classes
                  ])}
                >

                  {_text.body &&
                  <div
                    className={classes([
                      'grid__item-body'
                    ])}
                    style={{
                      fontSize: _text._size,
                      lineHeight: _text._lineHeight+'%',
                      color: _text._color,
                      backgroundColor: _text._background
                    }}
                  >

                    <div className="grid__item-body-inner">
                      {html(compile(_text.body))}
                    </div>

                  </div>
                  }

                  {_graphic._src &&
                  <div className="grid__item-graphic">

                    <div className="grid__item-graphic-inner">

                      <img
                        src={_graphic._src}
                        aria-label={_graphic.alt ? _graphic.alt : null}
                        aria-hidden={_graphic.alt ? false : true}
                      >
                      </img>

                    </div>

                  </div>
                  }

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

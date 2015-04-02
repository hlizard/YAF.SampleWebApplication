﻿/* Yet Another Forum.NET
 * Copyright (C) 2003-2005 Bjørnar Henden
 * Copyright (C) 2006-2013 Jaben Cargman
 * Copyright (C) 2014-2015 Ingo Herbote
 * http://www.yetanotherforum.net/
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

namespace YAF.SampleWebApplication
{
    using System;
    using System.Web.UI;

    using YAF.Core;

    /// <summary>
    /// The Default Page
    /// </summary>
    public partial class _Default : Page
    {
        /// <summary>
        /// Handles the Load event of the Page control.
        /// </summary>
        /// <param name="sender">
        /// The source of the event.
        /// </param>
        /// <param name="e">
        /// The <see cref="EventArgs"/> instance containing the event data.
        /// </param>
        protected void Page_Load(object sender, EventArgs e)
        {
            try
            {
                var csType = typeof(Page);

                if (YafContext.Current == null)
                {
                    return;
                }

                if (YafContext.Current.PageElements.PageElementExists("jquery"))
                {
                    return;
                }

                YafContext.Current.PageElements.AddPageElement("jquery");

                ScriptManager.RegisterClientScriptInclude(
                    this, 
                    csType, 
                    "JQuery",
                    ResolveUrl("~/forum/Scripts/jquery-2.1.3.min.js"));
            }
            catch (Exception)
            {
                this.Response.Redirect("~/forum/install/default.aspx");
            }
        }
    }
}
